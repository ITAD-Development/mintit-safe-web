import { ConfirmDialogProps, confirmDialog } from "primereact/confirmdialog";
import { SystemToast } from "./SystemToast";

export type SystemDialogParams = {
  accept?: () => Promise<void | boolean>;
  reject?: () => Promise<void | boolean>;
} & Partial<Omit<ConfirmDialogProps, "accept" | "reject">>;

export class SystemDialog {
  static remove(params: SystemDialogParams) {
    confirmDialog({
      message: "삭제 하시겠습니까?",
      header: "경고",
      icon: "pi pi-exclamation-triangle",
      style: { width: 300 },
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      ...params,
      async accept() {
        const result = await params.accept?.();
        if (result === false) {
          return;
        }
        SystemToast.success("삭제 되었습니다.");
      },
      async reject() {
        const result = await params.reject?.();
        if (result === false) {
          return;
        }
        SystemToast.info("취소 되었습니다.");
      },
    });
  }

  static deactive(params: SystemDialogParams) {
    confirmDialog({
      message: "비활성 하시겠습니까?",
      header: "경고",
      icon: "pi pi-exclamation-triangle",
      style: { width: 300 },
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      ...params,
      async accept() {
        const result = await params.accept?.();
        if (result === false) {
          return;
        }
        SystemToast.success("비활성 되었습니다.");
      },
      async reject() {
        const result = await params.reject?.();
        if (result === false) {
          return;
        }
        SystemToast.info("취소 되었습니다.");
      },
    });
  }

  static save(params: SystemDialogParams) {
    confirmDialog({
      message: "변경사항을 저장 하시겠습니까?",
      header: "확인",
      icon: "pi pi-info-circle",
      style: { width: 300 },
      defaultFocus: "reject",
      acceptClassName: "p-button-info",
      ...params,
      async accept() {
        const result = await params.accept?.();
        if (result === false) {
          return;
        }
        SystemToast.success("저장 되었습니다.");
      },
      async reject() {
        const result = await params.reject?.();
        if (result === false) {
          return;
        }
        SystemToast.info("취소 되었습니다.");
      },
    });
  }

  static create(params: SystemDialogParams) {
    confirmDialog({
      message: "등록 하시겠습니까?",
      header: "확인",
      icon: "pi pi-info-circle",
      style: { width: 300 },
      defaultFocus: "reject",
      acceptClassName: "p-button-info",
      ...params,
      async accept() {
        const result = await params.accept?.();
        if (result === false) {
          return;
        }
        SystemToast.success("등록 되었습니다.");
      },
      async reject() {
        const result = await params.reject?.();
        if (result === false) {
          return;
        }
        SystemToast.info("취소 되었습니다.");
      },
    });
  }

  static confirm(params: SystemDialogParams) {
    confirmDialog({
      message: "이대로 진행 할까요?",
      header: "확인",
      icon: "pi pi-info-circle",
      style: { width: 300 },
      defaultFocus: "accept",
      acceptClassName: "p-button-info",
      ...params,
      async accept() {
        const result = await params.accept?.();
        if (result === false) {
          return;
        }
        SystemToast.success("저장 되었습니다.");
      },
      async reject() {
        const result = await params.reject?.();
        if (result === false) {
          return;
        }
        SystemToast.info("취소 되었습니다.");
      },
    });
  }
}
