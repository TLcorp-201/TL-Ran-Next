interface Action {
  type: string;
  payload?: any;
}

type DataProvider = (
  resource: string,
  params: object,
  data: object,
  requestType: string,
  header: object,
) => Promise<any>;
