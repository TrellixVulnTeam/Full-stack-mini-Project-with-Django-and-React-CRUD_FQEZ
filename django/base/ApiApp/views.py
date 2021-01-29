from .models import Article
from .serializers import ArticleSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated



#modelviewset

class ArticleViewSet(viewsets.ModelViewSet):
        queryset = Article.objects.all()
        serializer_class = ArticleSerializer
        authentication_classes = (TokenAuthentication,)
        permission_classes = [IsAuthenticated]




#userview set 

class UserViewSet(viewsets.ModelViewSet):

        queryset = User.objects.all()
        serializer_class = UserSerializer
        























#viewset and rounters

""" class ArticleViewSet(viewsets.ViewSet):

        def list(self, request):
                articles = Article.objects.all()
                serializer = ArticleSerializer(articles, many=True)
                return Response(serializer.data)


        def create(self,request):
                serializer = ArticleSerializer(data=request.data)
                if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data, status=status.HTTP_201_CREATED)
                        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


        def retrieve(self, request, pk=None):
                articles =  Article.objects.all()
                article = get_object_or_404(queryset, pk=pk)
                serializer = ArticleSerializer(article)

                return Response(serializer.data)


        def update(self, request, pk=None):
                article = self.get.objects(pk=pk)
                serializer = ArticleSerializer(article, data=request.data)

                if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


        def destroy(self, request, pk=None):
                article = self.get.objects(pk=pk)
                article.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)

 """


                







#get post mixins generics CRUD
""" 

class ArticleList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):

        queryset = Article.objects.all()
        serializer_class = ArticleSerializer

        #get method
        def get(self, request):
                return self.list(request)

        #post method       
        def post(self, request):
                return self.create(request)



#put and delete generics
class ArticleDetails(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):

        queryset = Article.objects.all()
        serializer_class = ArticleSerializer
        
        #pk 
        lookup_field = 'id'

        #get data
        def get(self, request, id):

                return self.retrieve(request, id=id)
        #put method
        def put(self, request, id):
                return self.update(request, id=id)

        #delete method
        def delete(self, request, id):
                return self.destroy(request, id=id)


 """

        






























""" 

class ArticleList(APIView):

        def get(self, request):

                article = Article.objects.all()
                serializer = ArticleSerializer(article, many=True)
                return Response(serializer.data)


        def post(self, request):

                serializer = ArticleSerializer(data=request.data)
                if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data, status=status.HTTP_201_CREATED)

                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArticleDetails(APIView):

        def get_object(self, id):
                try:
                        return Article.object.get(id=id)
                except Article.DoesNotExist:
                        return Response(status=status.HTTP_404_NOT_FOUND)


        def get(self, request, id, format=None):
                article = self.get.object(id)
                serializer = ArticleSerializer(article)
                return Response(serializer.data)


        def put(self, request, id):
                article = self.get.object(id)
                serializer = ArticleSerializer(article, data=request.data)

                if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



        def delete(self, request, id):
                article = self.get.object(id)
                article.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)


 """












































""" # Create your views here.

@api_view(['GET', 'POST'])
def article_list(request):

        #get all articles wrking

        if request.method == 'GET':
                article = Article.objects.all()
                serializer = ArticleSerializer(article, many=True)
                return Response(serializer.data)

         

         #post all articles ntwrking
        elif request.method == 'POST':
               
                serializer = ArticleSerializer(data=request.data)

                if serializer.is_valid():
                        serializer.create()   #this is save to create
                        return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)








@api_view(['GET', 'PUT', 'DELETE'])
def article_details(request, pk):
        try:
                article = Article.objects.get(pk=pk)
        except Article.DoseNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)

         #get
        if request.method == 'GET':
                serializer = ArticleSerializer(article)
                return Response(serializer.data)
        


        #put ntwrking
        elif request.method == 'PUT':
                serializer = ArticleSerializer(article, data=request.data)

                if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



        #delete wrking
        elif request.method == 'DELETE':
                article.delete()
                return Response(status=status.HTTP_204_NO_CONTENT) """



