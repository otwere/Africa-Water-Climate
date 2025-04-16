"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function RoleManagementTable() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)

  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Administrator",
      department: "Water Quality Division",
      lastActive: "2 hours ago",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Data Analyst",
      department: "Climate Research",
      lastActive: "1 day ago",
    },
    {
      id: "3",
      name: "Michael Okafor",
      email: "michael@example.com",
      role: "Field Researcher",
      department: "Water Resources",
      lastActive: "3 days ago",
    },
    {
      id: "4",
      name: "Amina Hassan",
      email: "amina@example.com",
      role: "Project Manager",
      department: "Water Conservation",
      lastActive: "5 hours ago",
    },
    {
      id: "5",
      name: "David Mensah",
      email: "david@example.com",
      role: "Data Entry Specialist",
      department: "Monitoring & Evaluation",
      lastActive: "2 days ago",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Team Members</h3>
          <p className="text-sm text-muted-foreground">Manage user roles and access permissions</p>
        </div>
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>Invite a new team member and assign their role</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="user@example.com" type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="administrator">Administrator</SelectItem>
                    <SelectItem value="data-analyst">Data Analyst</SelectItem>
                    <SelectItem value="field-researcher">Field Researcher</SelectItem>
                    <SelectItem value="project-manager">Project Manager</SelectItem>
                    <SelectItem value="data-entry">Data Entry Specialist</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="water-quality">Water Quality Division</SelectItem>
                    <SelectItem value="climate-research">Climate Research</SelectItem>
                    <SelectItem value="water-resources">Water Resources</SelectItem>
                    <SelectItem value="water-conservation">Water Conservation</SelectItem>
                    <SelectItem value="monitoring">Monitoring & Evaluation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddUserOpen(false)}>Add User</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>{user.lastActive}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit User
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Role Permissions</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>View Data</TableHead>
                <TableHead>Edit Data</TableHead>
                <TableHead>Manage Users</TableHead>
                <TableHead>Manage Projects</TableHead>
                <TableHead>Export Data</TableHead>
                <TableHead>API Access</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Administrator</TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Data Analyst</TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Field Researcher</TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Project Manager</TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Data Entry Specialist</TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Viewer</TableCell>
                <TableCell>
                  <Checkbox defaultChecked disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
                <TableCell>
                  <Checkbox disabled />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
