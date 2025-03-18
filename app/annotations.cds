using { myNamespaceSrv } from '../srv/service.cds';

annotate myNamespaceSrv.Materials with @UI.HeaderInfo: { TypeName: 'Material', TypeNamePlural: 'Materials', Title: { Value: materialNumber } };
annotate myNamespaceSrv.Materials with {
  ID @UI.Hidden @Common.Text: { $value: materialNumber, ![@UI.TextArrangement]: #TextOnly }
};
annotate myNamespaceSrv.Materials with @UI.Identification: [{ Value: materialNumber }];
annotate myNamespaceSrv.Materials with @UI.DataPoint #materialName: {
  Value: materialName,
  Title: 'Material Name',
};
annotate myNamespaceSrv.Materials with {
  materialName @title: 'Material Name';
  materialNumber @title: 'Material Number';
  quantityOnHand @title: 'Quantity On Hand';
  lastUpdated @title: 'Last Updated'
};

annotate myNamespaceSrv.Materials with @UI.LineItem: [
 { $Type: 'UI.DataField', Value: materialName },
 { $Type: 'UI.DataField', Value: materialNumber },
 { $Type: 'UI.DataField', Value: quantityOnHand },
 { $Type: 'UI.DataField', Value: lastUpdated }
];

annotate myNamespaceSrv.Materials with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType', Data: [
 { $Type: 'UI.DataField', Value: materialName },
 { $Type: 'UI.DataField', Value: materialNumber },
 { $Type: 'UI.DataField', Value: quantityOnHand },
 { $Type: 'UI.DataField', Value: lastUpdated }
  ]
};

annotate myNamespaceSrv.Materials with @UI.HeaderFacets: [
 { $Type : 'UI.ReferenceFacet', Target : '@UI.DataPoint#materialName' }
];

annotate myNamespaceSrv.Materials with @UI.Facets: [
  { $Type: 'UI.ReferenceFacet', ID: 'Main', Label: 'General Information', Target: '@UI.FieldGroup#Main' }
];

annotate myNamespaceSrv.Materials with @UI.SelectionFields: [
  materialNumber
];

