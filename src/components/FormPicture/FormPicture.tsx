import React, {FC, useEffect} from 'react';
import styles from './FormPicture.module.scss';
import {useForm} from "react-hook-form";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

interface IFormValues {
    title: string,
    path: string,
    collection_id: number
}

const FormPicture: FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormValues>();

    const onSubmit = (data: any) => {
        createPicture(data.title, data.path, data.collection_id);
        reset();
    }

    const {collections} = useTypedSelector(state => state.collections);
    const {getCollections, createPicture} = useActions();

    useEffect(() => {
        getCollections();
    }, []);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    type="text"
                    placeholder="Название картинки"
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
                    placeholder="Ссылка на картинку"
                    {...register("path", {required: true})}
                    className={errors.path ? styles.errorInput : ''}
                />
                <div className={styles.errors}>
                    {errors.path?.type === "required" && <span>Поле должно быть заполнено</span>}
                </div>
            </div>
            
            <div>
                <select {...register("collection_id", { required: true })}>
                    {collections.map(collection =>
                        <option key={collection.id} value={collection.id}>{collection.title}</option>
                    )}
                </select>
            </div>
            <button className={styles.btn} type="submit">Создать</button>
        </form>
    );
};

export default FormPicture;
