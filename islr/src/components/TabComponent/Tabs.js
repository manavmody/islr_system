import React, { useEffect, useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Assesment from "../Tabs/Assesment";
import Words from "../Tabs/Word";
import Sentences from "../Tabs/Sentences";
import Review from "../Tabs/Review";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
    <h2 style={{ textAlign: 'center' }}>WELCOME TO PRJASOMA</h2>
      <ul className="nav">
        <TabNavItem title="Words" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Sentences" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Quiz" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="ML Based Assesment" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        
      </ul>
 
      <div className="outlet">  
      
        <TabContent id="tab1" activeTab={activeTab}>
        <Words/>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
        <Sentences/>
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
        <Review />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
        <Assesment/>
        </TabContent>
      
      </div>
    </div>
  );
};
 
export default Tabs;