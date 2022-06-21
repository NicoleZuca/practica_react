import React from 'react'
import { useForm } from 'react-hook-form'

const ProductForm = (props) => {

  //console.log(props.currentProduct)

  const {register, handleSubmit, setValue, formState: { errors }} = useForm({
    //recibe los valores por defecto que va a tener el formulario en este caso el input del name y el input del username
    defaultValues: props.currentProduct
  });

  //Los setValue van a ir detectando si algún campo cambia por medio del props.currentUser
  setValue('nombre', props.currentProduct.nombre);
  setValue('descripcion', props.currentProduct.descripcion); 
  setValue('fechaIngreso', props.currentProduct.fechaIngreso);
  setValue('precio', props.currentProduct.precio); 
  setValue('cantidad', props.currentProduct.cantidad);

    const onSubmit = (data, e) => {

        //limpiar campos
        e.target.reset();
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input disabled type="text" name="nombre" autoComplete="off"
          {...register("nombre", {
            required: {
              value: true, message: "Campo Requerido",
            },
          })}/>
          <div>
            {errors?.nombre?.message}
        </div>
        <label>Descripción</label>
        <input disabled type="text" name="descripcion" autoComplete="off"
          {...register("descripcion", {
            required: {
              value: true, message: "Campo Requerido",
            },
          })}/>
          <div>
            {errors?.descripcion?.message}
        </div>
        <label>Fecha de Ingreso</label>
        <input disabled type="text" name="fechaIngreso" autoComplete="off"
          {...register("fechaIngreso", {
            required: {
              value: true, message: "Campo Requerido",
            },
          })}/>
          <div>
            {errors?.fechaIngreso?.message}
        </div>
        <label>Precio</label>
        <input disabled type="text" name="precio" autoComplete="off"
          {...register("precio", {
            required: {
              value: true, message: "Campo Requerido",
            },
          })}/>
          <div>
            {errors?.precio?.message}
        </div>
        <label>Cantidad</label>
        <input disabled type="text" name="cantidad" autoComplete="off"
          {...register("cantidad", {
            required: {
              value: true, message: "Campo Requerido",
            },
          })}/>
          <div>
            {errors?.cantidad?.message}
        </div>
    </form>
  )
}

export default ProductForm