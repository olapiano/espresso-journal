export default async function handler(req, res) {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.MONGODB_DATA_API_KEY,
      },
    };
    const fetchBody = {
        dataSource: process.env.MONGODB_DATA_SOURCE,
        database: 'espresso_journal',
        collection: 'coffee_makers',
    };
    const baseUrl = `${process.env.MONGODB_DATA_API_URL}/action`;
  
    try {
      switch (req.method) {
        case "GET":
          const readData = await fetch(`${baseUrl}/find`, {
            ...fetchOptions,
            body: JSON.stringify({
                ...fetchBody,
                sort: { name: 1 }
            }),
          });
          const readDataJson = await readData.json();
          res.status(200).json(readDataJson.documents);
          break;
        case "POST":
          const coffee_maker = req.body
          const insertData = await fetch(`${baseUrl}/insertOne`, {
            ...fetchOptions,
            body: JSON.stringify({
                ...fetchBody,
                document: coffee_maker
            }),
          });
          const insertDataJson = await insertData.json();
          res.status(200).json(insertDataJson);
          break;
        case "PUT":
          const updateData = await fetch(`${baseUrl}/updateOne`, {
            ...fetchOptions,
            body: JSON.stringify({
                ...fetchBody,
                filter: { _id: { $oid: req.body_id} },
                update: {
                  $set: {
                    body: req.body.body
                  }
                }
            }),
          });
          const updateDataJson = await updateData.json();
          res.status(200).json(updateDataJson);
          break;
        case "DELETE":
          const deleteData = await fetch(`${baseUrl}/deleteOne`, {
            ...fetchOptions,
            body: JSON.stringify({
                ...fetchBody,
                filter: { _id: { $oid: req.body._id } },
            }),
          });
          const deleteDataJson = await deleteData.json();
          res.status(200).json(deleteDataJson);
          break;
        default:
          res.status(405).end();
          break;
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }