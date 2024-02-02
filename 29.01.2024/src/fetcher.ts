/* 
! meting-name: enum_const

const Clothes = {
  Tshrit: 'T-SHIRT With long sleeves',
  Pents: 'PENTS',
  Sweater: 'SWEATER',
  Jacket: 'JACKET',
} as const

type PostStateType = (typeof Clothes)[keyof typeof Clothes] // 'T-SHIRT' | 'PENTS' | 'SWEATER' | 'JACKET'

const post: PostStateType = Clothes.Pents

const post2: PostStateType = 'T-SHIRT With long sleeves'

*/

/* TASK

const Status = {
  Error: 'error',
  Success: 'success',
  Loading: 'loading',
}

function fetcher(url, options) {
  return [loading, error, data]
}

function fetcherResoler() {}
*/
//рішення Романа:
const Method = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

type fetchParams = {
  method: (typeof Method)[keyof typeof Method];
  body?: string;
};

const fetcher = async (
  url: string,
  options: fetchParams
): Promise<[loading: boolean, error: string, data: Response | undefined]> => {
  let loading;
  let isError;
  let data;

  try {
    loading = true;
    data = await fetch(url, options);
  } catch (error: any) {
    loading = false;
    isError = error;
    console.error(error);
  } finally {
    loading = false;
  }

  return [loading, isError, data];
};

const fetcherResolver = async (data: Response): Promise<object[]> => {
  return await data.json();
};

const render = (data: object[]) => {
  console.log("Proces pishov dali", data);
};