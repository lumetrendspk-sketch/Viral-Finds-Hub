const fs = require("fs");
const path = require("path");

const sourcePath = "C:/Users/HOME/Downloads/products - Sheet1.csv";
const outputPath = path.join(process.cwd(), "data", "products.json");

function parseCsv(content) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < content.length; i += 1) {
    const ch = content[i];

    if (ch === "\r") {
      continue;
    }

    if (ch === '"') {
      if (inQuotes && content[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if (ch === "\n" && !inQuotes) {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += ch;
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

const categoryMap = {
  bag: "Bags",
  bags: "Bags",
  shoes: "Shoes",
  dress: "Clothes",
  clothes: "Clothes",
  jewerly: "Jewelry",
  jewelry: "Jewelry",
  beauty: "Beauty",
};

const counts = {
  Bags: 0,
  Shoes: 0,
  Clothes: 0,
  Jewelry: 0,
  Beauty: 0,
};

const csv = fs.readFileSync(sourcePath, "utf8");
const rows = parseCsv(csv);
const products = [];

for (let rowIndex = 1; rowIndex < rows.length; rowIndex += 1) {
  const cols = rows[rowIndex];

  for (let i = 0; i < 20; i += 4) {
    const rawCategory = (cols[i] || "").trim().toLowerCase();
    const title = (cols[i + 1] || "").trim();
    const image = (cols[i + 2] || "").trim();
    const affiliateUrl = (cols[i + 3] || "").trim();

    const category = categoryMap[rawCategory];
    if (!category || !title || !image || !affiliateUrl) {
      continue;
    }

    counts[category] += 1;
    products.push({
      id: `${category.toLowerCase()}-${String(counts[category]).padStart(3, "0")}`,
      category,
      title,
      price: null,
      image,
      affiliateUrl,
    });
  }
}

fs.writeFileSync(outputPath, `${JSON.stringify(products, null, 2)}\n`, "utf8");

console.log("Imported products:", products.length);
console.log("Counts by category:", counts);
