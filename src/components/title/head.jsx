import css from 'components/Title/head.module.css'

const Head = ({ headTitle }) => {
    return (
        <h1 className={css.title}>{headTitle}</h1>
    )
}

export default Head;