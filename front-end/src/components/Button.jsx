import "./styles/button.css";

export const Button = ({children, model, ...props}) => {
   const BUTTON_TYPE = {
      PRIMARY : "button-primary",
      SM_CREATE : "button-small-create",
      MD_UPDATE : "button-medium-update",
      MD_TAMBAH : "button-medium-tambah",
      EDIT : "button-edit",
      DELETE : "button-delete",
      READ : "button-read"
   }

   const modelClassName = BUTTON_TYPE[model || "PRIMARY"]

   return (
      <>
         <button className={modelClassName} {...props}>
            {children}
         </button>
      </>
   )
}

export default Button;
