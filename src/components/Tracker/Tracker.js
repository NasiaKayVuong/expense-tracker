import React, {Component} from 'react';
import fire from '../../config/Fire';
import './Tracker.css';

class Tracker extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div className="trackerBlock">
                <div className="welcome">
                    <span>Hi, Username!</span>
                    <button className="exit" onClick={this.logout}>Exit</button>
                </div>
                <div className="totalMoney">$145</div>

                <div className="newTransactionBlock">
                    <div className="newTransaction">
                        <form>
                            <input
                                placeholder="Transaction Name"
                                type="text"
                                name="transactionName"
                            />
                            <div className="inputGroup">
                                <select name="type">
                                    <option value="0">Type</option>
                                    <option value="expense">Expense</option>
                                    <option value="deposit">Deposit</option>

                                </select>
                                <input
                                    placeholder="Price"
                                    type="text"
                                    name="price"
                                />
                            </div>
                            <input
                                    placeholder="Additional Notes"
                                    type="text"
                                    name="notes"
                            />
                            <button 
                            className="addTransaction">
                                + Add Transaction
                            </button>
                        </form>
                    </div>
                </div>

                <div className="latestTransactions">
                    <p>Latest Transactions</p>
                    <ul>
                        <li>
                            <div>ATM Deposit</div>
                            <div>+$5</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tracker