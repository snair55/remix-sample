import { useLoaderData, Link } from "@remix-run/react";
import { DashboardModel } from "~/models/Dashboard"
import styles from "./dashboard.css";
const Dashboard = () => {
    let data = useLoaderData<DashboardModel>();

    return (
        <>
          <div className="container">
            <h2>Dashboard</h2>
            <div className="d-flex">
              <div className="panel">
                <h3>Total users : {data.data.totalUsers} </h3>
              </div>
              <div className="panel">
                <h3>Verified users : {data.data.verifiedUsers} </h3>
              </div>
              <div className="panel">
                <h3>Active users : {data.data.activeUsers} </h3>
              </div>
            </div>
    
          </div>
    
        </>
      );
}

export default Dashboard;

export const links = () => [{ rel: 'stylesheet', href: styles }]