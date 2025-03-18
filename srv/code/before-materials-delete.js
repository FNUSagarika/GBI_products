/**
 * The custom logic attached to the Materials entity to validate conditions before deleting materials, ensuring compliance with business rules.
 * @Before(event = { "DELETE" }, entity = "myNamespaceSrv.Materials")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
    const { Materials } = cds.entities;
    const materialID = request.data.ID;

    if (!materialID) {
        return; // If no ID is provided, exit early
    }

    const material = await SELECT.one.from(Materials).where({ ID: materialID });

    if (material && material.quantityOnHand > 0) {
        request.reject(400, 'Cannot delete material with quantity on hand greater than zero.');
    }
};
