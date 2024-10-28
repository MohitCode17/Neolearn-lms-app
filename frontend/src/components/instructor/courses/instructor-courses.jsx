import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Delete, Edit } from "lucide-react";

const InstructorCourses = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>All Courses</CardTitle>
        <Button onClick={() => navigate("/instructor/create-new-course")}>
          Create New Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Courses</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  JavaScript Mastery 2025
                </TableCell>
                <TableCell>1400</TableCell>
                <TableCell>₹698600</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Delete className="h-6 w-6" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructorCourses;
