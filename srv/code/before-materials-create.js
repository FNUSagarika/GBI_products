/**
 * The custom logic attached to the Materials entity to validate data before creating new materials, ensuring compliance with business rules.
 * @Before(event = { "CREATE" }, entity = "myNamespaceSrv.Materials")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
  const { Materials } = cds.entities;

  // Extract data from the request
  const { materialName, materialNumber } = request.data;

  // Check if materialNumber is provided
  if (!materialNumber) {
    request.reject(400, 'Material number is mandatory.');
    return;
  }

  // Check for uniqueness of materialNumber
  const existingMaterial = await SELECT.one.from(Materials).where({ materialNumber });
  if (existingMaterial) {
    request.reject(400, `Material number '${materialNumber}' already exists.`);
    return;
  }

  // Additional business rule validations can be added here

  // If all validations pass, allow the creation to proceed
};
