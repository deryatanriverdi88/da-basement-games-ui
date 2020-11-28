export default function SetItem({handleSetClick, set}) {
    return (
        <>
            <p onClick={handleSetClick}>{set}</p>
        </>
    )
}