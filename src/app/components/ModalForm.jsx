'use client';

import { BsInfoSquareFill } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { toast } from 'react-toastify';
import authClient from '../lib/auth-clint';

const modalSubmit = async (e) => {
  e.preventDefault();
  const formdata = new FormData(e.target);
  const userData = Object.fromEntries(formdata.entries());

  try {
    await authClient.updateUser({
      name: userData.name,
      email: userData.email,
      image: userData.image,
    });
    toast.success('Profile updated successfully!');
  } catch (err) {
    console.error(err);
    toast.error('Failed to update profile. Please try again.');
  }
};

export function ModalForm() {
  return (
    <Modal>
      <Button className="w-6/12 py-2 px-4 rounded-lg bg-dusk text-white cursor-pointer font-semibold shadow hover:bg-sunset hover:text-dusk transition-all duration-300">
        Update Info
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BsInfoSquareFill className="size-5 text-wave" />
              </Modal.Icon>
              <Modal.Heading>
                <div className="flex items-center gap-2">
                  <FaRegEdit className="text-wave" />
                  Update Your Info
                </div>
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below to update your profile information.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={modalSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>

                  <TextField className="w-full" name="image" type="text">
                    <Label>Image</Label>
                    <Input placeholder="Enter your image URL" />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-wave text-white font-semibold">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
