import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Switch } from 'antd';


export default function AppStatus() {

    return (
        <Row>
            <Col span={16}></Col>
            <Col span={6}>Application Status</Col>
            <Col span={2}>
                <Switch defaultChecked onChange={() => console.log('hi')} />
            </Col>
        </Row>
    )
}

