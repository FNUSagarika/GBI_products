/**
 * The custom logic attached to the Materials entity to validate data before updating existing materials, ensuring data integrity and compliance with business rules.
 * @Before(event = { "UPDATE" }, entity = "myNamespaceSrv.Materials")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
  const { Materials } = cds.entities;
  
  // Extract the data from the request
  const { materialNumber, quantityOnHand } = request.data;

  // Ensure materialNumber is provided
  if (!materialNumber) {
    return request.reject(400, 'Material number is mandatory.');
  }

  // Check if the material exists
  const existingMaterial = await SELECT.one.from(Materials).where({ materialNumber });
  if (!existingMaterial) {
    return request.reject(404, 'Material not found.');
  }

  // Validate quantityOnHand if provided
  if (quantityOnHand !== undefined && quantityOnHand < 0) {
    return request.reject(400, 'Quantity on hand cannot be negative.');
  }

  // Update the lastUpdated timestamp
  request.data.lastUpdated = new Date().toISOString();
};
