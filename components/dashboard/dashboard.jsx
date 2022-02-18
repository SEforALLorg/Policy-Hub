import React from 'react';
import ExpandCustomize from './components/expandCustomize';
import Reports from './components/reports';
import { DashWrap } from "./style"
const Dashboard = () => {
    return (
        <DashWrap>
            <ExpandCustomize />
            <Reports />
        </DashWrap>
    );
};

export default Dashboard;