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
    const [fileName, setFileName] = useState<string>('Выберите файл');


    const setInputFileName = () => {
        if (inputFile && inputFile.current && inputFile.current.files) {
            setFileName((inputFile.current.files[0].name));
        }
    }

    useEffect(() => {
        getCollections();
    }, []);

    const onSubmit = async (data: any) => {
        const picture = {
            title: data.title,
            path: '',
            collection_id: data.collection_id
        }

        if (inputFile && inputFile.current && inputFile.current.files) {
            const file = inputFile.current?.files[0];
            const reader = new FileReader();
            // @ts-ignore
            if (file) {
                reader.readAsDataURL(file);
            }

            reader.addEventListener('load', async () => {
                // @ts-ignore
                picture.path = await reader.result;
                console.log(picture);
                createPicture(picture.title, picture.path, picture.collection_id);
            })
        }
        reset();
    }


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
                        ref={inputFile}
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
