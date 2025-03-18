namespace myNamespace;
using { cuid } from '@sap/cds/common';

@assert.unique: { materialNumber: [materialNumber] }
entity Materials : cuid {
  materialName: String(100);
  materialNumber: String(50) @mandatory;
  quantityOnHand: Integer;
  lastUpdated: Timestamp;
}

