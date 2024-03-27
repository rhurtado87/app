import "./Admin.css";

function Admin() {
    return (
    <div className="admin page">
            <h1 className="admin-title">Store Administration</h1>

            <div className="card-shop">
                <div className="card">
                    <h3 className="card-title">Products</h3>
                    <p className="card-description">Manage your products here.</p>
                </div>

                <div className="card">
                    <h3 className="card-title">Coupons</h3>
                    <p className="card-description">Manage your coupons here.</p>
                </div>
            </div>
        </div>
    );
}
export default Admin;