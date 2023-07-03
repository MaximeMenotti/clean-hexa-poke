export interface ViewMapper<CoreModel, ViewModel> {
  toViewModel(model: CoreModel): ViewModel;
  fromViewModel(viewModel: ViewModel): CoreModel;
}
