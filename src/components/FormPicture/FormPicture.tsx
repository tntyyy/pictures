import React, { FC } from 'react';
import styles from './FormPicture.module.scss';
import {useForm} from "react-hook-form";

interface IFormValues {
    title: string,
    path: string,
    collection_id: number
}

const FormPicture: FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormValues>();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    type="text"
                    placeholder="Название коллекции"
                    {...register("title", {required: true, maxLength: 20})}
                    className={errors.title ? styles.errorInput : ''}
                />
                <div className={styles.errors}>
                    {errors.title?.type === "required" && <span>Поле должно быть заполнено</span>}
                </div>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Описание коллекции"
                    {...register("path", {required: true})}
                    className={errors.path ? styles.errorInput : ''}
                />
                <div className={styles.errors}>
                    {errors.path?.type === "required" && <span>Поле должно быть заполнено</span>}
                </div>
            </div>
            
            <div>
                <select {...register("collection_id", { required: true })}>
                    <option value="1">Anime</option>
                    <option value="2">Test 2</option>
                    <option value="3">Test 3</option>
                    <option value="4">Test 4</option>
                </select>
            </div>
            <button className={styles.btn} type="submit">Создать</button>
        </form>
    );
};

export default FormPicture;
