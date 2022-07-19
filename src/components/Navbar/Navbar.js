import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import avatar from '../../assets/images/avatar.gif';
import MobileMenu from '../MobileMenu/MobileMenu';

const Navbar = () => {
    return (
        <>

            <div id="left-section">
                <nav>
                    <ul>
                        <li>
                            <Link to="#" className="user_status" title="{username}">
                                <img src={avatar} className="rounded-circle" />
                                <span className="user-online"></span>
                            </Link>
                            <ul >
                                <li className="menu_working_as">Working as 'username'</li>
                                <li><Link to="#" id="status_online"><span className="user-status user-online"></span> Online</Link> </li>
                                <li><Link to="#" id="status_dnd"><span className="user-status user-offline"></span> Do Not Disturb</Link> </li>
                                <li><Link to="#" id="status_away"><span className="user-status user-dnd"></span> Show as Away</Link> </li>
                                <li><Link to="#" id="status_on_call"><span className="user-status user-on-call"></span> On a Call</Link> </li>
                            </ul>
                        </li>

                        <li>
                            <Link to="#" className="nav_active" title="Home"><FontAwesomeIcon icon={Icons.faHome}/></Link>
                            <ul style={{ top: "68px", left: "79px" }}>
                                <li><Link to="#"><i className="fa fa-home"></i> My Feed</Link> </li>
                                <li><Link to="#"><i className="fa fa-inbox"></i> Inbox</Link> </li>
                            </ul>
                        </li>

                        <li className="leftNavFilterContainer">
                            <Link to="#" title="Filter"><FontAwesomeIcon icon={Icons.faBullseye}/></Link>
                            <ul style={{ top: "126px", left: "79px" }}>
                                <li><Link to="#"><i className="fa fa-home"></i> Filter 1</Link> </li>
                                <li><Link to="#"><i className="fa fa-home"></i> Filter 2</Link> </li>
                                <li><Link to="#"><i className="fa fa-home"></i> Filter 3</Link> </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#"><FontAwesomeIcon icon={Icons.faSearch}/></Link>
                            <ul style={{ top: "175px", left: "79px" }}>
                                <li>
                                    <form className="navbar-form" role="search" action="#" method="GET">
                                        <div className="input-group searchBox">
                                            <input type="text" name="v" className="form-control" placeholder="Search for..." aria-label="Search for..." aria-describedby="button-addon2" />
                                            <button className="btn btnSearch" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="contacts.html" title="Contacts"><FontAwesomeIcon icon={Icons.faUser}/></Link>
                            <ul style={{ top: "184px", left: "79px" }}>
                                <li><Link to="#"><i className="fa fa-users"></i> All Contacts</Link> </li>
                                <li><Link to="#"><i className="fa fa-user-plus"></i> Add New Contact</Link> </li>
                                <li>
                                    <Link to="contact_group.html"><i className="fa fa-users"></i> Audiences &amp; Groups</Link>
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-edit"></i> Waivers / Petition Signers</Link> </li>
                                    </ul>
                                </li>

                                <li><Link to="#"><i className="fa fa-table"></i> Import Spreadsheet</Link> </li>
                                <li><Link to="#"><i className="fa-brands fa-wpforms"></i> Web Form &amp; Chat Sessions</Link> </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" title="Drive / Storage"><FontAwesomeIcon icon={Icons.faDatabase}/></Link>
                            <ul style={{ top: "262px", left: "79px" }}>
                                <li><Link to="/drive"><i className="fa fa-database"></i> Drive</Link> </li>
                                <li><Link to="#"><i className="fa fa-cloud-upload"></i> Upload</Link> </li>
                                <li><Link to="#"><i className="fa-regular fa-file"></i> New Doc</Link> </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" title="Tasks &amp; Projects"><FontAwesomeIcon icon={Icons.faCheck}/></Link>
                            <ul style={{ top: "288px", left: "79px" }}>
                                <li><Link to="#"><i className="fa fa-check-square"></i> All Tasks</Link> </li>
                                <li><Link to="#"><i className="fa fa-check-square"></i> New Task / Job / Sales Opportunity</Link> </li>
                                <li>
                                    <Link to="#"><i className="fa fa-life-ring"></i> Support</Link>
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-ticket"></i> Open Tickets</Link> </li>
                                        <li><Link to="#"><i className="fa-regular fa-star"></i> Customer Feedback</Link> </li>
                                        <li><Link to="#"><i className="fa fa-question-circle"></i> Knowledgebase</Link> </li>
                                    </ul>
                                </li>
                                <li><Link to="#"><i className="fa fa-rocket"></i> Templates &amp; Playbooks</Link> </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" title="Marketing"><FontAwesomeIcon icon={Icons.faBullhorn}/></Link>
                            <ul style={{ top: "265px", left: "79px" }}>
                                <li><Link to="#"><i className="fa fa-bullhorn"></i> Campaigns &amp; Experiments</Link> </li>
                                <li>
                                    <Link to="contact_group.html"><i className="fa fa-users"></i> Audiences &amp; Groups</Link>
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-edit"></i> Waivers / Petition Signers</Link> </li>
                                    </ul>
                                </li>
                                <li><Link to="#"><i className="fa fa-align-justify"></i> Messages / Ads / Creative</Link> </li>
                                <li><Link to="#"><i className="fa fa-plus"></i> New Message / Ad / Creative</Link> </li>
                                <li><Link to="#"><i className="fa fa-th-list"></i> Sequences</Link> </li>
                                <li>
                                    <Link to="#"><i className="fa-regular fa-star"></i> Reviews &amp; Referrals</Link>
                                    <ul>
                                        <li><Link to="#"><i className="fa-regular fa-star"></i> Review Intake Forms</Link> </li>
                                        <li><Link to="#"><i className="fa fa-user-plus"></i> Refer a Friend</Link> </li>
                                    </ul>
                                </li>
                                <li><Link to="#"><i className="fa fa-sign-in"></i> Lead Intake</Link> </li>
                                <li><Link to="#"><i className="fa fa-sign-in"></i> Landing Pages</Link> </li>
                                <li>
                                    <Link to="#menu2"><i className="fa fa-book"></i> Web Forms</Link>
                                    <ul>
                                        <li><Link to="https://swiftcloud.io/form/my-forms" target="_blank"><i className="fa fa-list-alt"></i> My Forms</Link> </li>
                                        <li><Link to="https://swiftcloud.io/form/create-form" target="_blank"><i className="fa fa-plus-square"></i> Create New Web Form</Link> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" title="Calendar"><FontAwesomeIcon icon={Icons.faCalendarDays}/></Link>
                            <ul style={{ top: "299px", left: "79px" }}>
                                <li><Link to="#"><i className="fa-regular fa-calendar-days"></i> Calendar</Link> </li>
                                <li><Link to="#"><i className="fa fa-history fa-flip-horizontal"></i> Agenda</Link> </li>
                                <li><Link to="#"><i className="fa-regular fa-clock"></i> Timeclock</Link> </li>
                                <li><Link to="#"><i className="fa-regular fa-calendar-days"></i> Upcoming Appointments</Link> </li>
                                <li><Link to="#"><i className="fa-regular fa-calendar-plus"></i> Add Event</Link> </li>
                                <li><Link to="#"><i className="fa-regular fa-calendar"></i> Schedulers</Link> </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" title="Accounting"><FontAwesomeIcon icon={Icons.faDollar}/></Link>
                            <ul style={{ top: "450px", left: "79px" }}>
                                <li><Link to="#"><i className="fa fa-exchange"></i> Accounting</Link> </li>
                                <li>
                                    <Link to="#"><i className="fa fa-sign-in"></i> Incoming</Link>
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-shopping-cart"></i> SKUs / Items you sell</Link> </li>
                                        <li><Link to="#"><i className="fa fa-file-text"></i> Create New Invoice</Link> </li>
                                        <li><Link to="#"><i className="fa-regular fa-clock"></i> Invoices (Receivable)</Link> </li>
                                        <li><Link to="#"><i className="fa-regular fa-handshake"></i> Billing Agreements</Link> </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-sign-out"></i> Outgoing</Link>
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-share"></i> Purchase History</Link> </li>
                                        <li><Link to="#"><i className="fa-regular fa-handshake"></i> Billing Agreements</Link> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" title="Settings"><FontAwesomeIcon icon={Icons.faGear}/></Link>
                            <ul style={{ top: "381px", left: "79px" }}>
                                <li><Link to="#" className="btnThemeMode"><i className="fa-regular fa-moon"></i> Change to Dark Mode</Link> </li>
                                <li><Link to="/settings"><i className="fa fa-gear"></i> General Settings</Link> </li>
                                <li><Link to="/urls"><i className="fa fa-chain"></i> URLs</Link> </li>
                                <li><Link to="#"><i className="fa fa-dollar"></i> Financial Settings</Link> </li>
                                <li><Link to="#" id="change_password"><i className="fa fa-key"></i> Change Password</Link> </li>
                                <li><Link to="#audioSettingModal" data-toggle="modal"><i className="fa fa-volume-up"></i> Audio Settings</Link> </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" title="Support"><FontAwesomeIcon icon={Icons.faQuestionCircle}/></Link>
                            <ul style={{ top: "545px", left: "79px" }}>
                                <li><Link to="https://swiftcloud.ai/support/" target="_blank"><i className="fa fa-question-circle"></i>  This Page Help</Link> </li>
                                <li><Link to="https://swiftcloud.ai/support/" target="_blank"><i className="fa fa-laptop"></i> Support Center</Link> </li>
                                <li><Link to="https://swiftcloud.ai/support/resources" target="_blank"><i className="fa-regular fa-folder-open"></i>  Resource Library</Link> </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <Link to="#" className="nav_logout"><FontAwesomeIcon icon={Icons.faPowerOff}/></Link>
            </div>

            {/* <!-- Mobile menu --> */}
            <MobileMenu/>

        </>
    )
}

export default Navbar