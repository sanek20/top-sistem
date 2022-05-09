import React, {useState} from 'react';
import cls from './CatalogList.module.scss'
import {SelectCity} from "../SelectCity/SelectCity";
import {CatalogListItem} from "../CatalogListItem/CatalogListItem";
import {catalogList} from "../../../../data/data";

const CatalogList = () => {
    const [selectCity, setSelectCity] = useState(1)

    return (
        <div className={cls.wrapper}>
            <SelectCity setSelectCity={setSelectCity}/>
            <div className={cls.list}>
                {catalogList.map(item => {
                    return (
                        <div className={cls.listItem} key={item.id}>
                            <CatalogListItem {...item} />
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export {CatalogList};
