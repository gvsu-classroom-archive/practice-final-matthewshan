function ItemsForm({fetchCallback, updateCallback}) {
    let submit = (event) => {
        event.preventDefault()
        fetchCallback()
    }
    return <form onSubmit={submit}>
        <p>Enter your order number:</p>
        <input id="num" type="text" onChange={(event) => updateCallback(event.target.value)}/>
        <button type="submit">Submit</button>
    </form>
}

function ItemsItem({item}) {
    console.log(item)
    return <tr>
        <td>{item.item}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
    </tr>
}

function ItemsTable({items}) {
    console.log(items)
    let sum = 0
    for(let i = 0; i < items.length; i++)
        sum += items[i]['price']
    return <table>
        <thead>
            <tr>
                <td>Item</td>
                <td>Quantity</td>
                <td>Price</td>
            </tr> 
        </thead>
        <tbody>
            {items.map((x) => (
                <ItemsItem item={x}/>
            ))}
            <tr>
                <td style={{borderTop: '1px black solid'}}>Total:</td>
                <td style={{borderTop: '1px black solid'}}></td>
                <td style={{borderTop: '1px black solid'}}>{sum}</td>
            </tr>

        </tbody>
    </table>
}

function ItemsView() {
    let [itemsList, setItemsList] = React.useState([]);
    let [id, setId] = React.useState(1);

    let fetchItems = () => {
        fetch(`https://www.cis.gvsu.edu/~kurmasz/Orders/${id}`)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    setItemsList(data)
                }) 
                .catch((error) => {
                    alert("Error Retrieving Data")
                })
    }

    return <div>
        <ItemsForm fetchCallback={fetchItems} updateCallback={setId}/>
        <ItemsTable items={itemsList}/>
    </div>
}

ReactDOM.render(
    <ItemsView />,
    document.getElementById("main")
);