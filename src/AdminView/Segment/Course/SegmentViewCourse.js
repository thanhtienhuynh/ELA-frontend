
import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import {Segment } from 'semantic-ui-react'
import ButtonEdit from './ButtonEditCourse'
import ButtonDelete from './ButtonDeleteCourse'

const data = [
    {
        key: '1',
        name: 'IELTS 1',
        totaltime: '30',
        price: '5.000.000 VND',
        status: 'Active',
    },
    {
        key: '2',
        name: 'IELTS 1',
        totaltime: '30',
        price: '5.000.000 VND',
        status: 'Active',
    }, {
        key: '3',
        name: 'IELTS 1',
        totaltime: '30',
        price: '5.000.000 VND',
        status: 'Active',
    }, {
        key: '4',
        name: 'IELTS 1',
        totaltime: '30',
        price: '5.000.000 VND',
        status: 'Active',
    },
    {
        key: '5',
        name: 'IELTS 1',
        totaltime: '30',
        price: '5.000.000 VND',
        status: 'Active',
    }, {
        key: '6',
        name: 'IELTS 1',
        totaltime: '30',
        price: '5.000.000 VND',
        status: 'Active',
    },
];



export default class SegmentViewCourse extends React.Component {

    state = {
        searchText: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };


    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Total Slot',
                dataIndex: 'totaltime',
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'pirce',
                sorter: (a, b) => a.price.length - b.price.length,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('price'),
            },
            {
                title: 'Action',
                dataIndex: 'action',
                render: () =>  <div>
                    <ButtonEdit></ButtonEdit>
                    <ButtonDelete></ButtonDelete>
                </div>
            },
        ];
        return <Segment><Table columns={columns} dataSource={data} /></Segment> ;
    }
}