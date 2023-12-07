// import csv files
// mongoimport --db=atelier --collection=products --type=csv --headerline --file=/Users/derekwilliams/Desktop/HR/sdc\ csvs/product.csv
// mongoimport --db=atelier --collection=features --type=csv --headerline --file=/Users/derekwilliams/Desktop/HR/sdc\ csvs/features.csv
// mongoimport --db=atelier --collection=related --type=csv --headerline --file=/Users/derekwilliams/Desktop/HR/sdc\ csvs/related.csv
// mongoimport --db=atelier --collection=skus --type=csv --headerline --file=/Users/derekwilliams/Desktop/HR/sdc\ csvs/skus.csv
// mongoimport --db=atelier --collection=styles --type=csv --headerline --file=/Users/derekwilliams/Desktop/HR/sdc\ csvs/styles.csv 
// mongoimport --db=atelier --collection=photos --type=csv --headerline --file=/Users/derekwilliams/Desktop/HR/sdc\ csvs/photos.csv 

// need to look into ways to transform before importing

// join data from mongosh
// adds the features to each product id
db.products.aggregate([ 
  { 
    $lookup: { 
      from: "features",
      localField: "id",
      foreignField: "product_id",
      as: "features" 
    }, 
  },
  { 
    $out: 
      "productsFeatures",
  }
]);
