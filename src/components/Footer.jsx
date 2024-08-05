export default function Footer({items}){

    const totalItems = items.length
    const checked = items.filter((item) => item.checked ).length

    return(
        <div className="footer">
        <p>there are {totalItems} notes and there are {checked} checklists</p>
    </div>
    )
}