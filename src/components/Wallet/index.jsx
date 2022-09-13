
const Wallet = ({listWallets}) => {

    return (
        <section>
        {listWallets.map(({id, asset_ticket, name, sub_total}) => 

            <div key={id}>
                <h1>{name}</h1>
                <p>{asset_ticket}</p>
                <p>Sub Total: {sub_total} R$</p>
            </div>
      )}
        <button onClick={listWallets}></button>
      </section>
    )
}

export default Wallet;