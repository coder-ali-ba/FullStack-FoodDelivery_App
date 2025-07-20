import React from 'react'
import AdminLayout from '../../../Components/LayoutComp/AdminLayout'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

function AllRestaurants() {

    const restaurants = [
  {
    restaurantName: "131232132",
    email: "123@gmail.com",
    category: "indian",
    isOpen: true,
    isApproved: true,
    createBy: "68765d44c35c05a41b643549",
    isDeleted: true,
  },
  {
    restaurantName: "Spicy Hub",
    email: "spicyhub@example.com",
    category: "indian",
    isOpen: false,
    isApproved: true,
    createBy: "user456789",
    isDeleted: false,
  },]
  return (
    <AdminLayout>
        <h1>All Restaurants</h1>
        <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Restaurant Name</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell><strong>Is Open</strong></TableCell>
            <TableCell><strong>Is Approved</strong></TableCell>
            <TableCell><strong>Created By</strong></TableCell>
            <TableCell><strong>Is Deleted</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurants.map((restaurant, index) => (
            <TableRow key={index}>
              <TableCell>Name</TableCell>
              <TableCell>email</TableCell>
              <TableCell>cate</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>Approval</TableCell>
              <TableCell>createby</TableCell>
              <TableCell>Deleted</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </AdminLayout>
    
  )
}

export default AllRestaurants
