using { myNamespace } from '../db/schema.cds';

@path: '/service/myNamespace'
@requires: 'authenticated-user'
service myNamespaceSrv {
  @odata.draft.enabled
  entity Materials as projection on myNamespace.Materials;
}