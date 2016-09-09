declare module "object.values" {

  interface objectValues {
    values(obj: Object) : Array<any>
  }

  const objv: objectValues;
  export = objv;
}