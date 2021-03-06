import IdeaDto, { newIdeaDto } from "@/types/domain/group/tab/idea/IdeaDto";
import create from "zustand";

interface IIdeaDialogStore {
  initialValue: IdeaDto;
  dialogIsOpen: boolean;
  openDialog: (initialValue: IdeaDto) => void;
  closeDialog: () => void;
}

const useIdeaDialogStore = create<IIdeaDialogStore>((set, get) => ({
  initialValue: newIdeaDto(),
  confirmDialogValue: { title: "", onConfirm: () => {} },
  dialogIsOpen: false,
  openDialog: (initialValue) => {
    set({ dialogIsOpen: true, initialValue });
  },
  closeDialog: () => set({ dialogIsOpen: false }),
}));

export default useIdeaDialogStore;
