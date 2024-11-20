import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

function ModalLogIn() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}
						className='text-sm font-normal text-default-600 bg-default-100'
						startContent='сюда можно вставить icon'
						variant='flat'>
						Увійти
			</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Вхід в особистий кабінет</ModalHeader>
              <ModalBody>
              <Input type="email" label="Електронна пошта" />
              <Input type="password" label="Пароль" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрити
                </Button>
                <Button color="primary" onPress={onClose}>
                  Увійти
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalLogIn
