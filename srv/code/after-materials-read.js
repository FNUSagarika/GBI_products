/**
 * The custom logic attached to the Materials entity to perform calculations or transformations after reading materials, ensuring the data source remains unchanged.
 * @After(event = { "READ" }, entity = "myNamespaceSrv.Materials")
 * @param {(Object|Object[])} results - For the After phase only: the results of the event processing
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(results, request) {
  // Ensure results are defined and are an array
  if (!results || !Array.isArray(results)) return;

  // Perform calculations or transformations on each material
  results.forEach(material => {
    // Example transformation: Add a calculated field based on existing fields
    material.isLowStock = material.quantityOnHand < 10; // Flag if stock is low
    material.lastUpdatedFormatted = material.lastUpdated ? new Date(material.lastUpdated).toLocaleString() : null; // Format timestamp
  });
};
