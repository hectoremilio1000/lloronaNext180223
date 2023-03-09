import React from 'react'
import styles from "../Main/menuCategory.module.css"

function ButtonMenuFilter({ categories, filterCategory }) {
    console.log(categories)
    return (
        <div className={styles.menu_categories}>
            {categories.map(category => {
                return (
                    <button className='activeM'
                        onClick={() => filterCategory(category)}
                        key={category}
                    >
                        {category}
                    </button>);
            })}
        </div>
    )
}

export default ButtonMenuFilter