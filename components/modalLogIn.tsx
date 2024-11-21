import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">Увійти</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Вхід в особистий кабінет</ModalHeader>
              <ModalBody>
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  radius='lg'
                  className="border-2 border-zinc-500 border-opacity-20 focus-within:border-blue-500 h-14 rounded-2xl bg-zinc-500 bg-opacity-20"
                />
                <Input
                  name="password"
                  label="Пароль"
                  type="password"
                  radius='lg'
                  className="border-2 border-zinc-500 border-opacity-20 focus-within:border-blue-500 h-14 rounded-2xl bg-zinc-500 bg-opacity-20"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Запам'ятати мене
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Забули пароль?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
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
