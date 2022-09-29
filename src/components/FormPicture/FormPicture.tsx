import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './FormPicture.module.scss';
import {useForm} from "react-hook-form";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";

interface IFormValues {
    title: string,
    path: string,
    collection_id: number
}

const FormPicture: FC = () => {
    const {collections} = useTypedSelector(state => state.collections);
    const {getCollections, createPicture} = useActions();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormValues>();
    const inputFile = useRef<HTMLInputElement | null>(null);
    const {ref, ...rest} = register("path", {required: true});

    const [fileName, setFileName] = useState<string>('Выберите файл');

    const onSubmit = (data: any) => {
        createPicture(data.title, data.path, data.collection_id);
        reset();
    }

    const setInputFileName = () => {
        if (inputFile && inputFile.current && inputFile.current.files) {
            setFileName((inputFile.current.files[0].name));
        }
    }

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
                <label className={styles.inputFile}>
                    <input
                        type="file"
                        {...rest}
                        ref={(e) => {
                            ref(e);
                            inputFile.current = e
                        }}
                        onChange={() => setInputFileName()}
                    />
                        <span>{fileName}</span>
                </label>
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
