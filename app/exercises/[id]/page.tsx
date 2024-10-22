export default function Page(
  { params }:
   { params: 
    { id: string } 
  }
) {
  return (
    <div>
      Exercise is : {params.id}
    </div>
  )  
}