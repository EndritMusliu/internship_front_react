
import "./Dashboard.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa6";
import { useAuth } from './AuthContext.js';
import { useNavigate } from 'react-router-dom';




const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };
  return (
    <div className="dash">
      <main>
        <h2 className="dash-text">Dashboard</h2>

        <div className="drop">
          <p>Filter queues</p>
          <MdOutlineKeyboardArrowDown />
        </div>

        <div className="drop">
          <p>Batches per PM</p>
          <MdOutlineKeyboardArrowDown />
        </div>

        <div className="calendar">
          <div className="c-elements">
          <MdKeyboardArrowLeft className="c-icons"/>
          <p className="c-text">Mar 2025</p>
          <MdKeyboardArrowRight className="c-icons"/>
          </div>
          <div className="c-right">
            <p>Total per week:50</p>
            <p>Remaining:19</p>
            <table>
              <table>
                <thead>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thur</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
            <td>
              <p className="entry-num">16</p>
            </td>
            <td>
              <p id="entry-only" className="entry-num">17</p>
              <div className="entry">1 Batches</div>
            </td>
            <td>
              <p className="entry-num">18</p>
            </td>
            <td>
              <p className="entry-num">19</p>
              <div className="entry">1 Batches</div>
            </td>
            <td>
              <p  className="entry-num">20</p>
              <div className="entry">6 Batches</div>
              <div className="entry">2 Trunks</div>
            </td>
            <td>
              <p className="entry-num">21</p>
              <div className="entry">6 Batches</div>
              <div className="entry">3 Trunks</div>
            </td>
            <td>
              <p className="entry-num">22</p>
            </td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td>Total: 0</td>
            <td>Total: 1</td>
            <td>Total: 0</td>
            <td>Total: 1</td>
            <td>Total: 8</td>
            <td>Total: 9</td>
            <td>Total: 0</td>
          </tr>
        </tfoot>
              </table>
            </table>
          </div>
        </div>

        <div className="drop-1">
          <p>My Tasks (0)</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="drop-1">
          <p>My Active Projects</p>
          <MdOutlineKeyboardArrowDown />
        </div>

        <div className="drop-2">
          <p>Today's Migrations and Builds (7 & 0)</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="drop-2">
          <p>My Active Conversations</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <h2 className="dash-project">Projects</h2>
        <div className="analysis">
          <h3>Analysis (1)</h3>
          <div className="analysis-show">
            <div id="analysis-span"></div>
            <p>sarasota.fl</p>
            <div className="analysis-icon">
            <FaRegCalendar style={{fontSize:"12px", position:"relative",top:"3px",left:"5px",color:"white",borderRadius:"5px"}} />
            <span>-6</span>
            <div className='analysis-avatar'>RS</div>
            <div className='analysis-avatar'>RS</div>
            <div className='analysis-avatar'>PH</div>
            </div>
          </div>
        </div>
        <button className="logoutbtn"  onClick={handleLogout}>Logout</button>
      </main>
    </div>
  )
}

export default Dashboard