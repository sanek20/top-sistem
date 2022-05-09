import React from 'react';
import cls from "../../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss";
import {useForm} from "react-hook-form";
import {cities} from "../../../../data/data";

const SelectCity = ({setSelectCity}) => {
    const {
        register,
        formState: {errors},
        watch,
    } = useForm({
        mode: "all"
    })

    const changeSelect = (data) => {
        console.log(data)
    }

    return (
        <div className={cls.formItem}>
            <label>Город</label>
            <select onChange={watch(changeSelect)} {...register("city", {
            //    Правила для useForm
            })}>
                {cities.map((i,idx) => {
                    return (
                        <option
                            value={i.value}
                            key={idx*Math.random()}>
                            {i.label}
                        </option>
                    )
                })}
            </select>
        </div>
    );
};

export {SelectCity};
