import React, { FC } from 'react';
import styles from './FormCollection.module.scss';
import {useForm} from "react-hook-form";
import {useActions} from "hooks/useActions";

interface IFormValues {
    name: string,
    description: string
}

const FormCollection: FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormValues>();
    const {createCollection} = useActions();

    const onSubmit = (data: any) => {
        createCollection(data.name, data.description);
        reset();
    }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <input
                  type="text"
                  placeholder="Название коллекции"
                  {...register("name", {required: true, maxLength: 20})}
                  className={errors.name ? styles.errorInput : ''}
              />
              <div className={styles.errors}>
                  {errors.name?.type === "required" && <span>Поле должно быть заполнено</span>}
              </div>
          </div>

          <div>
              <input
                  type="text"
                  placeholder="Описание коллекции"
                  {...register("description", {required: true, maxLength: 30})}
                  className={errors.name ? styles.errorInput : ''}
              />
              <div className={styles.errors}>
                  {errors.description?.type === "required" && <span>Поле должно быть заполнено</span>}
              </div>
          </div>
          <button  className={styles.btn} type="submit">Создать</button>
      </form>
  );
};

export default FormCollection;
