import React from 'react'

const Navbar = () => {
    return (
        <>
            <div id="left-section">
                <nav>
                    <ul>
                        <li>
                            <a href="/" className="user_status" title="{username}">
                                <img src="images/avatar.gif" className="rounded-circle" />
                                <span className="user-online"></span>
                            </a>
                            <ul>
                                <li className="menu_working_as">Working as 'username'</li>
                                <li><a href="/" id="status_online"><span className="user-status user-online"></span> Online</a></li>
                                <li><a href="/" id="status_dnd"><span className="user-status user-offline"></span> Do Not Disturb</a></li>
                                <li><a href="/" id="status_away"><span className="user-status user-dnd"></span> Show as Away</a></li>
                                <li><a href="/" id="status_on_call"><span className="user-status user-on-call"></span> On a Call</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="/" className="nav_active" title="Home"><i className="fa fa-home"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa fa-home"></i> My Feed</a></li>
                                <li><a href="/"><i className="fa fa-inbox"></i> Inbox</a></li>
                            </ul>
                        </li>

                        <li className="leftNavFilterContainer">
                            <a href="/" title="Filter"><i className="fa fa-bullseye"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa fa-home"></i> Filter 1</a></li>
                                <li><a href="/"><i className="fa fa-home"></i> Filter 2</a></li>
                                <li><a href="/"><i className="fa fa-home"></i> Filter 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-search"></i></a>
                            <ul style={{ top: "184px", left: "79px" }}>
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
                            <a href="contacts.html" title="Contacts"><i className="fa fa-user"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa fa-users"></i> All Contacts</a></li>
                                <li><a href="/"><i className="fa fa-user-plus"></i> Add New Contact</a></li>
                                <li>
                                    <a href="contact_group.html"><i className="fa fa-users"></i> Audiences &amp; Groups</a>
                                    <ul>
                                        <li><a href="/"><i className="fa fa-edit"></i> Waivers / Petition Signers</a></li>
                                    </ul>
                                </li>

                                <li><a href="/"><i className="fa fa-table"></i> Import Spreadsheet</a></li>
                                <li><a href="/"><i className="fa-brands fa-wpforms"></i> Web Form &amp; Chat Sessions</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="drive.html" title="Drive / Storage"><i className="fa fa-database"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa fa-database"></i> Drive</a></li>
                                <li><a href="/"><i className="fa fa-cloud-upload"></i> Upload</a></li>
                                <li><a href="/"><i className="fa-regular fa-file"></i> New Doc</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/" title="Tasks &amp; Projects"><i className="fa-solid fa-check"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa fa-check-square"></i> All Tasks</a></li>
                                <li><a href="/"><i className="fa fa-check-square"></i> New Task / Job / Sales Opportunity</a></li>
                                <li>
                                    <a href="/"><i className="fa fa-life-ring"></i> Support</a>
                                    <ul>
                                        <li><a href="/"><i className="fa fa-ticket"></i> Open Tickets</a></li>
                                        <li><a href="/"><i className="fa-regular fa-star"></i> Customer Feedback</a></li>
                                        <li><a href="/"><i className="fa fa-question-circle"></i> Knowledgebase</a></li>
                                    </ul>
                                </li>
                                <li><a href="/"><i className="fa fa-rocket"></i> Templates &amp; Playbooks</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/" title="Marketing"><i className="fa fa-bullhorn"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa fa-bullhorn"></i> Campaigns &amp; Experiments</a></li>
                                <li>
                                    <a href="contact_group.html"><i className="fa fa-users"></i> Audiences &amp; Groups</a>
                                    <ul>
                                        <li><a href="/"><i className="fa fa-edit"></i> Waivers / Petition Signers</a></li>
                                    </ul>
                                </li>
                                <li><a href="/"><i className="fa fa-align-justify"></i> Messages / Ads / Creative</a></li>
                                <li><a href="/"><i className="fa fa-plus"></i> New Message / Ad / Creative</a></li>
                                <li><a href="/"><i className="fa fa-th-list"></i> Sequences</a></li>
                                <li>
                                    <a href="/"><i className="fa-regular fa-star"></i> Reviews &amp; Referrals</a>
                                    <ul>
                                        <li><a href="/"><i className="fa-regular fa-star"></i> Review Intake Forms</a></li>
                                        <li><a href="/"><i className="fa fa-user-plus"></i> Refer a Friend</a></li>
                                    </ul>
                                </li>
                                <li><a href="/"><i className="fa fa-sign-in"></i> Lead Intake</a></li>
                                <li><a href="/"><i className="fa fa-sign-in"></i> Landing Pages</a></li>
                                <li>
                                    <a href="#menu2"><i className="fa fa-book"></i> Web Forms</a>
                                    <ul>
                                        <li><a href="https://swiftcloud.io/form/my-forms" target="_blank"><i className="fa fa-list-alt"></i> My Forms</a></li>
                                        <li><a href="https://swiftcloud.io/form/create-form" target="_blank"><i className="fa fa-plus-square"></i> Create New Web Form</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/" title="Calendar"><i className="fa-regular fa-calendar-days"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa-regular fa-calendar-days"></i> Calendar</a></li>
                                <li><a href="/"><i className="fa fa-history fa-flip-horizontal"></i> Agenda</a></li>
                                <li><a href="/"><i className="fa-regular fa-clock"></i> Timeclock</a></li>
                                <li><a href="/"><i className="fa-regular fa-calendar-days"></i> Upcoming Appointments</a></li>
                                <li><a href="/"><i className="fa-regular fa-calendar-plus"></i> Add Event</a></li>
                                <li><a href="/"><i className="fa-regular fa-calendar"></i> Schedulers</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/" title="Accounting"><i className="fa fa-dollar"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa fa-exchange"></i> Accounting</a></li>
                                <li>
                                    <a href="/"><i className="fa fa-sign-in"></i> Incoming</a>
                                    <ul>
                                        <li><a href="/"><i className="fa fa-shopping-cart"></i> SKUs / Items you sell</a></li>
                                        <li><a href="/"><i className="fa fa-file-text"></i> Create New Invoice</a></li>
                                        <li><a href="/"><i className="fa-regular fa-clock"></i> Invoices (Receivable)</a></li>
                                        <li><a href="/"><i className="fa-regular fa-handshake"></i> Billing Agreements</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/"><i className="fa fa-sign-out"></i> Outgoing</a>
                                    <ul>
                                        <li><a href="/"><i className="fa fa-share"></i> Purchase History</a></li>
                                        <li><a href="/"><i className="fa-regular fa-handshake"></i> Billing Agreements</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/" title="Settings"><i className="fa fa-gear"></i></a>
                            <ul>
                                <li><a href="/" className="btnThemeMode"><i className="fa-regular fa-moon"></i> Change to Dark Mode</a></li>
                                <li><a href="settings.html"><i className="fa fa-gear"></i> General Settings</a></li>
                                <li><a href="urls.html"><i className="fa fa-chain"></i> URLs</a></li>
                                <li><a href="/"><i className="fa fa-dollar"></i> Financial Settings</a></li>
                                <li><a href="/" id="change_password"><i className="fa fa-key"></i> Change Password</a></li>
                                <li><a href="#audioSettingModal" data-toggle="modal"><i className="fa fa-volume-up"></i> Audio Settings</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/" title="Support"><i className="fa fa-question-circle"></i></a>
                            <ul>
                                <li><a href="https://swiftcloud.ai/support/" target="_blank"><i className="fa fa-question-circle"></i>  This Page Help</a></li>
                                <li><a href="https://swiftcloud.ai/support/" target="_blank"><i className="fa fa-laptop"></i> Support Center</a></li>
                                <li><a href="https://swiftcloud.ai/support/resources" target="_blank"><i className="fa-regular fa-folder-open"></i>  Resource Library</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <a href="/" className="nav_logout"><i className="fa fa-power-off"></i></a>
            </div>

            {/* <!-- Mobile menu --> */}
            <div className="mobileMenuContainer d-md-none">
                <div className="row no-gutters">
                    <div className="col-lg-12 mobileHeader">
                        <a href="/" className="mobileToggleLeft"><i className="fa fa-navicon fa-lg"></i></a>
                        <a href="/" className="logo_block m_change_site"><img src="images/SwiftCloud-logo.png" /></a>
                        <a href="/" className="mobileToggleRight"><i className="fa fa-navicon fa-lg"></i></a>
                    </div>
                    <div id="mobileNavLeft" className="mobileNav">
                        <div className="overlay hidden"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="profile_block">
                                    <a href="#mobile_menu_profile" className="list-group-item collapsed p-lr-10" data-bs-toggle="collapse" data-parent="#profile_block" aria-expanded="false">
                                        <img className="rounded-circle" width="40" height="40" src="images/avatar.gif" />
                                        <span className="user-logged-in-as">
                                            Logged in as 'Username'
                                            <div className="user_status"><span></span> Online</div>
                                        </span>
                                    </a>
                                </div>
                                <div className="collapse" id="mobile_menu_profile">
                                    <a href="/" className="list-group-item" id="status_online" data-parent="#menu_profile">
                                        <div className="user_status user-online"><span className="user-status user-online"></span> Online</div>
                                    </a>
                                    <a href="/" className="list-group-item" id="status_dnd" data-parent="#menu_profile">
                                        <div className="user_status user-offline"><span className="user-status user-offline"></span> Do Not Disturb</div>
                                    </a>
                                    <a href="/" className="list-group-item" id="status_away" data-parent="#menu_profile">
                                        <div className="user_status user-dnd"><span className="user-status user-dnd"></span> Show as Away</div>
                                    </a>
                                    <a href="/" className="list-group-item" id="status_on_call" data-parent="#menu_profile">
                                        <div className="user_status user-dnd"><span className="user-status user-on-call"></span> On a Call</div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="menu_icons list-group-item" >
                                    <a href="#mobile_top_menu_icon_1" className="collapsed" data-bs-toggle="collapse" data-parent="#mobile_menu_icons" aria-expanded="false"><i className="fa fa-user"></i></a>
                                    <a href="#mobile_top_menu_icon_2" className="collapsed" data-bs-toggle="collapse" data-parent="#mobile_menu_icons" aria-expanded="false"><i className="fa fa-database"></i></a>
                                    <a href="#mobile_top_menu_icon_5" className="collapsed" data-bs-toggle="collapse" data-parent="#mobile_menu_icons" aria-expanded="false"><i className="fa fa-check"></i></a>
                                    <a href="#mobile_top_menu_icon_7" className="collapsed" data-bs-toggle="collapse" data-parent="#mobile_menu_icons" aria-expanded="false"><i className="fa fa-bullhorn"></i></a>
                                    <a href="#mobile_top_menu_icon_4" className="collapsed" data-bs-toggle="collapse" data-parent="#mobile_menu_icons" aria-expanded="false"><i className="fa fa-calendar"></i></a>
                                    <a href="#mobile_top_menu_icon_6" className="collapsed" data-bs-toggle="collapse" data-parent="#mobile_menu_icons" aria-expanded="false"><i id="currencyIcon" className="fa fa-dollar"></i></a>
                                </div>
                                <div className="menu_icons_container">
                                    <div className="collapse" id="mobile_top_menu_icon_1">
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_1"><i className="fa fa-users"></i> All Contacts</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_1"><i className="fa fa-user-plus"></i> Add New Contact</a>
                                        <a href="#mobile_menu11" className="list-group-item collapsed" data-bs-toggle="collapse" data-parent="#mobile_top_menu_icon_1" aria-expanded="false"><i className="fa fa-users"></i> Audiences &amp; Groups</a>
                                        <div className="collapse menu_thirdLevel" id="mobile_menu11">
                                            <a href="/" className="list-group-item" data-parent="#mobile_menu11"><i className="fa fa-edit"></i> Waivers / Petition Signers</a>
                                        </div>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_1"><i className="fa fa-table"></i> Import Spreadsheet</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_1"><i className="fa-brands fa-wpforms"></i> Web Form &amp; Chat Sessions</a>
                                    </div>

                                    <div className="collapse" id="mobile_top_menu_icon_2">
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_2"><i className="fa fa-database" aria-hidden="true"></i> Drive</a>
                                        <a href="/" data-toggle="modal" data-target="#global_image_tool_container" className="list-group-item" data-parent="#mobile_top_menu_icon_2"><i className="fa fa-cloud-upload"></i> Upload</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_2"><i className="fa-regular fa-file"></i> New Doc</a>
                                    </div>

                                    <div className="collapse" id="mobile_top_menu_icon_5">
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_5"><i className="fa fa-check-square"></i> All Tasks</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_5"><i className="fa fa-check-square"></i> New Task / Job / Sales Opportunity</a>

                                        <a href="#mobile_menu51" className="list-group-item collapsed" data-bs-toggle="collapse" data-parent="#mobile_top_menu_icon_5" aria-expanded="false"><i className="fa fa-life-ring"></i> Support</a>
                                        <div className="collapse menu_thirdLevel" id="mobile_menu51">
                                            <a href="/" className="list-group-item" data-parent="#mobile_menu51"><i className="fa fa-ticket"></i> Open Tickets</a>
                                            <a href="/" className="list-group-item" data-parent="#mobile_menu51"><i className="fa fa-star-o"></i> Customer Feedback</a>
                                            <a href="/" className="list-group-item" data-parent="#mobile_menu51"><i className="fa fa-question-circle"></i> Knowledgebase</a>
                                        </div>
                                        <a href="/" className="list-group-item" data-parent="#top_menu_icon_5"><i className="fa fa-rocket"></i> Templates &amp; Playbooks</a>
                                    </div>

                                    <div className="collapse" id="mobile_top_menu_icon_7">
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_7"><i className="fa fa-th-list"></i> Campaigns &amp; Experiments</a>
                                        <a href="#mobile_menu71" className="list-group-item collapsed" data-bs-toggle="collapse" data-parent="#mobile_top_menu_icon_7" aria-expanded="false"><i className="fa fa-users"></i> Audiences &amp; Groups</a>
                                        <div className="collapse menu_thirdLevel" id="mobile_menu71">
                                            <a href="/" className="list-group-item" data-parent="#mobile_menu11"><i className="fa fa-edit"></i> Waivers / Petition Signers</a>
                                        </div>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_7"><i className="fa fa-align-justify"></i> Messages / Ads / Creative</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_7"><i className="fa fa-plus"></i> New Message / Ad / Creative</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_7"><i className="fa fa-th-list"></i> Sequences</a>

                                        <a href="#mobile_top_menu_icon_71" className="list-group-item collapsed" data-bs-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i className="fa fa-star"></i> Reviews &amp; Referrals</a>
                                        <div className="collapse menu_thirdLevel" id="mobile_top_menu_icon_71">
                                            <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_71"><i className="fa fa-star"></i> Review Intake Forms</a>
                                            <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_71"><i className="fa fa-user-plus"></i> Refer a Friend</a>
                                        </div>

                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_7"><i className="fa fa-sign-in"></i> Lead Intake</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_7"><i className="fa fa-sign-in"></i> Landing Pages</a>

                                        <a href="#mobile_top_menu_icon_72" className="list-group-item collapsed" data-bs-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i className="fa fa-book"></i> Web Forms</a>
                                        <div className="collapse menu_thirdLevel" id="mobile_top_menu_icon_72">
                                            <a href="https://swiftcloud.io/form/my-forms" className="list-group-item" data-parent="#mobile_top_menu_icon_72"><i className="fa fa-list-alt"></i> My Forms</a>
                                            <a href="https://swiftcloud.io/form/create-form" className="list-group-item" data-parent="#mobile_top_menu_icon_72"><i className="fa fa-plus-square"></i> Create New Web Form</a>
                                        </div>
                                    </div>

                                    <div className="collapse" id="mobile_top_menu_icon_4">
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_4"><i className="fa-regular fa-calendar-days"></i> Calendar</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_4"><i className="fa fa-history fa-flip-horizontal"></i> Agenda</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_4"><i className="fa-regular fa-clock"></i> Timeclock</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_4"><i className="fa-regular fa-calendar-days"></i> Upcoming Appointments</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_4"><i className="fa-regular fa-calendar-plus"></i> Add Event</a>
                                        <a href="/" className="list-group-item" data-parent="#mobile_top_menu_icon_4"><i className="fa-regular fa-calendar"></i> Schedulers</a>
                                    </div>

                                    <div className="collapse" id="mobile_top_menu_icon_6">
                                        <a href="/" className="list-group-item" data-parent="#top_menu_icon_1"><i className="fa fa-exchange"></i> Accounting</a>
                                        <a href="#incoming_submenu_mobile" className="list-group-item collapsed" data-bs-toggle="collapse" aria-expanded="false" data-parent="#mobile_top_menu_icon_6"><i className="fa fa-sign-in"></i> Incoming</a>
                                        <div className="collapse menu_thirdLevel" id="incoming_submenu_mobile">
                                            <a href="/" className="list-group-item" data-parent="#incoming_submenu_mobile"><i className="fa fa-shopping-cart"></i> SKUs / Items you sell</a>
                                            <a href="/" className="list-group-item" data-parent="#incoming_submenu_mobile"><i className="fa fa-file-text"></i> Create New Invoice</a>
                                            <a href="/" className="list-group-item" data-parent="#incoming_submenu_mobile"><i className="fa-regular fa-clock"></i> Invoices (Receivable)</a>
                                            <a href="/" className="list-group-item" data-parent="#incoming_submenu_mobile"><i className="fa-regular fa-handshake"></i> Billing Agreements</a>
                                        </div>
                                        <a href="#outgoing_submenu_mobile" className="list-group-item collapsed" data-bs-toggle="collapse" aria-expanded="false" data-parent="#mobile_top_menu_icon_6"><i className="fa fa-sign-out"></i> Outgoing</a>
                                        <div className="collapse menu_thirdLevel" id="outgoing_submenu_mobile">
                                            <a href="/" className="list-group-item" data-parent="#outgoing_submenu_mobile"><i className="fa fa-share"></i> Purchase History</a>
                                            <a href="/" className="list-group-item" data-parent="#outgoing_submenu_mobile"><i className="fa-regular fa-handshake"></i> Billing Agreements</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="search_block list-group-item">
                                    <form className="navbar-form" role="search">
                                        <div className="input-group searchBox">
                                            <input type="text" name="v" className="form-control" placeholder="Search for..." aria-label="Search for..." aria-describedby="button-addon2" />
                                            <button className="btn btnSearch" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="mobileNavRight" className="mobileNav">
                        <div className="overlay hidden"></div>
                        <ul className="navbar-nav">
                            <li>
                                <div className="menu_icons list-group-item">
                                    <a href="#menu_right_icon_1" className="collapsed" data-bs-toggle="collapse" data-parent="#menu_icons" aria-expanded="false"><i className="fa fa-question-circle"></i></a>
                                    <a href="#menu_right_icon_2" className="collapsed" data-bs-toggle="collapse" data-parent="#menu_icons" aria-expanded="false"><i className="fa fa-gear"></i></a>
                                    <a href="/"><i className="fa fa-power-off"></i></a>
                                </div>
                                <div className="menu_icons_container">
                                    <div className="collapse menu_secondLevel" id="menu_right_icon_1">
                                        <a href="https://swiftcloud.ai/support/" className="list-group-item" data-parent="#menu_icon_3"><i className="fa fa-question-circle"></i> This Page Help</a>
                                        <a href="https://swiftcloud.ai/support/" className="list-group-item" data-parent="#menu_icon_3"><i className="fa fa-laptop"></i> Support Center</a>
                                        <a href="https://swiftcloud.ai/support/resources" className="list-group-item" data-parent="#menu_icon_3"><i className="fa-regular fa-folder-open"></i>  Resource Library</a>
                                    </div>
                                </div>
                                <div className="collapse menu_secondLevel" id="menu_right_icon_2">
                                    <a href="/" className="list-group-item btnThemeMode" data-parent="#menu_icon_5"><i className="fa-regular fa-moon"></i> Change to Dark Mode</a>
                                    <a href="/" className="list-group-item" data-parent="#menu_icon_5"><i className="fa fa-gear"></i> General Settings</a>
                                    <a href="/" className="list-group-item" data-parent="#menu_icon_5"><i className="fa fa-chain"></i> URLs</a>
                                    <a href="/" className="list-group-item" data-parent="#menu_icon_5"><i className="fa fa-dollar"></i> Financial Settings</a>
                                    <a href="/" className="list-group-item" data-parent="#menu_icon_5"><i className="fa fa-key"></i> Change Password</a>
                                    <a href="#audioSettingModal" className="list-group-item" data-parent="#menu_icon_5" data-toggle="modal"><i className="fa fa-volume-up"></i> Audio Settings</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar