import { Helmet } from "react-helmet-async";

const HOC = ({children, title = "Halo"}) => {
   return (
      <>
         <Helmet>
            <title>{title}</title>
         </Helmet>
         {children}
      </>
   )
} 

export default HOC