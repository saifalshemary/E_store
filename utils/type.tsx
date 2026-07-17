


export type ActionFunction = (
    prevState:any,
    FormData:FormData
)=> Promise<{message:string}>