
export class FindTenantResultDto  {
  success: boolean;
  tenantId?: string;
  name: string;

  constructor(initialValues: Partial<FindTenantResultDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
